using System;
using System.Collections.Generic;

namespace exercise.App.database
{
    public partial class Exercise
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string ExerciseName { get; set; }
        public string image { get; set; }
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int? Day { get; set; }
    }
}
