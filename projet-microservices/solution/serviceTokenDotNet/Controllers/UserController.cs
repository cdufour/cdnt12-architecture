using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using serviceTokenDotNet.Models;

namespace serviceTokenDotNet.Controllers
{
  public class UserController : Controller
  {
    
    public struct ApiResponse
    {
      public string token { get; set; }
      public string message { get; set; }
    }
    
    public struct TokenBody
    {
      public string token { get; set; }
    }
    
    public string CreateMD5Hash(string input)
    {
      // Step 1, calculate MD5 hash from input
      MD5 md5 = System.Security.Cryptography.MD5.Create();
      byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
      byte[] hashBytes = md5.ComputeHash(inputBytes);
      
      // Step 2, convert byte array to hex string
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < hashBytes.Length; i++)
      {
          sb.Append(hashBytes[i].ToString("X2"));
      }
      return sb.ToString();
    }

    private readonly UserContext _context;
    
    public UserController(UserContext context)
    {
      _context = context;
    }

    [Route("user")]
    [HttpGet]
    public ActionResult<IEnumerable<User>> GetUsers()
    {
      return _context.Users.ToList();
    }

    [Route("user")]
    [HttpPost]
    public StatusCodeResult PostUser([FromBody] User user)
    {
      _context.Users.Add(user);
      _context.SaveChanges();
      return StatusCode(201);
    }


    [Route("creds")]
    [HttpPost]
    public IActionResult CheckCredsForToken([FromBody] User body)
    {
      ApiResponse apiResponse = new ApiResponse();
      
      if (body.email == null || body.password == null) 
      {
        apiResponse.message = "DATA_MISSING";
        return Ok(apiResponse);
      }

      var searchedUser = (from u in _context.Users
          where u.email == body.email && u.password == body.password
          select u).FirstOrDefault<User>();

      if (searchedUser == null) 
      {
        apiResponse.message = "AUTH_FAILED";
        return Ok(apiResponse);
      }

      DateTime now = DateTime.Now;
      string token = CreateMD5Hash(now.ToString());

      searchedUser.token = token;
      _context.SaveChanges();

      apiResponse.token = token;
      apiResponse.message = "AUTH_SUCCEEDED";

      return Ok(apiResponse);
    }


    [Route("token")]
    [HttpPost]
    public IActionResult CheckToken([FromBody] TokenBody body)
    {
      var searchedUser = (from u in _context.Users
          where u.token == body.token
          select u).FirstOrDefault<User>();

      if (searchedUser == null)
      {
        var res = new { foundToken = false };
        return Ok(res);
      }
      else
      {
        var res = new { foundToken = true };
        return Ok(res);
      }
    }
    

  }
}
