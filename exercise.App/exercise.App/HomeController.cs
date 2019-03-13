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

     
        public IActionResult Gethistory(int Id)
        {
            Exercise history;
            using (var context = new Digital_TrainerContext())
            {
                history = context.Exercise.FirstOrDefault(e => e.Id == Id);
                history.LastCompleted = DateTime.Now;
                context.SaveChanges();
                return Json(context.Exercise.Where(e => e.LastCompleted.HasValue)
                                            .OrderByDescending(e => e.LastCompleted.Value)
                                            .ToList());
            }
            
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
