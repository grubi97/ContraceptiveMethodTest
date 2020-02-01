using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TheProject.Controllers
{
    [Route("users")]
    public class UsersController : Controller
    {
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetAsync (int userId)
        {
            var user = new User
            {
                Id = 0,
                Name = "Niks",
                Email = "niks@test.test"
            };
            if (userId == 0)
            {
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync ([FromBody]User user)
        {
            var bla = user;
            return Ok();
        }
    }

    public class User
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Email { get; set; }
    }
}
