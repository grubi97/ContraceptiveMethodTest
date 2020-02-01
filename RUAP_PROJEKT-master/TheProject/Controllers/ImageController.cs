using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TheProject.Controllers
{
    [Route("images")]
    public class ImageController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> Upload ([FromForm]IFormFile file)
        {
            var path = "C:\\Users\\Ivana\\Desktop\\TheProject\\TheProject\\picture.jpg";
            using (var stream = new FileStream(path, FileMode.Create))
            {
                 await file.CopyToAsync(stream);
            }

            var psi = new ProcessStartInfo();
            psi.FileName = "cmd.exe";
            psi.UseShellExecute = false;
            psi.RedirectStandardOutput = true;
            psi.Arguments = "/c py C:\\Users\\Ivana\\Desktop\\TheProject\\TheProject\\bla.py";

            var process = new Process();
            process.StartInfo = psi;
            process.Start();
            string output = await process.StandardOutput.ReadToEndAsync();
            var result = output.Split('\r')[0];
            process.WaitForExit();
            return Ok(Json(result));
            
        }
    }
}
