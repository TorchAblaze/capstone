﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RestServer.Models;

namespace trip.Migrations
{
    [DbContext(typeof(RestServerContext))]
    [Migration("20210728034606_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("RestServer.Models.Trip", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Caption1")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Caption2")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Caption3")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Photo1")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Photo2")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Photo3")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PhotoDate1")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PhotoDate2")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("PhotoDate3")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Tips")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Trips");
                });
#pragma warning restore 612, 618
        }
    }
}
