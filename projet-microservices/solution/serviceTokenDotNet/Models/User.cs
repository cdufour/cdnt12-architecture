namespace serviceTokenDotNet.Models
{
    public class User
    {
        public int Id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string token { get; set; }
    }
}