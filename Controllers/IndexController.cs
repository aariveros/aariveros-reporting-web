using Microsoft.AspNetCore.Mvc;


namespace aariveros_reporting_web.Controllers
{
    public class IndexController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}