using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace trip.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trips",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Tips = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    PhotoDate1 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Photo1 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Caption1 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    PhotoDate2 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Photo2 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Caption2 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    PhotoDate3 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Photo3 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Caption3 = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Lat = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    Lng = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trips", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Trips");
        }
    }
}
