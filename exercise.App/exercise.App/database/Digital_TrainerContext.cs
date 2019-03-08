using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace exercise.App.database
{
    public partial class Digital_TrainerContext : DbContext
    {
        public Digital_TrainerContext()
        {
        }

        public Digital_TrainerContext(DbContextOptions<Digital_TrainerContext> options)
            : base(options)
        {
        }
        
        public virtual DbSet<Exercise> Exercise { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=root;database=Digital_Trainer");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           

            modelBuilder.Entity<Exercise>(entity =>
            {
                entity.ToTable("exercise", "digital_trainer");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasColumnName("category")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Day)
                    .HasColumnName("day")
                    .HasColumnType("int(11)");

                entity.Property(e => e.ExerciseName)
                    .IsRequired()
                    .HasColumnName("exercise")
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .IsUnicode(false);

                entity.Property(e => e.Reps)
                    .HasColumnName("reps")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Sets)
                    .HasColumnName("sets")
                    .HasColumnType("int(11)");
            });
            
        }
    }
}
