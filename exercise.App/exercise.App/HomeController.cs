using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using exercise.App.database;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace exercise.App
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            
            return View();
        }

        public IActionResult Getexercises(string category)
        {
            List<Exercise> models;
            using (var context = new Digital_TrainerContext())
            {
                models = context.Exercise.Where(e => e.Category == category).ToList();
            }
            return Json(models);
        }
    }
}
