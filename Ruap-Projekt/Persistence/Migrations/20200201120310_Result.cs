using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Result : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contraceptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Date = table.Column<DateTime>(nullable: false),
                    WifeAge = table.Column<int>(nullable: true),
                    WifeEducation = table.Column<int>(nullable: true),
                    husbandEducation = table.Column<int>(nullable: true),
                    Children = table.Column<int>(nullable: true),
                    WifeReligion = table.Column<int>(nullable: true),
                    WifeWork = table.Column<int>(nullable: true),
                    HusbandOccupation = table.Column<int>(nullable: true),
                    LivingStandard = table.Column<int>(nullable: true),
                    MediaExposure = table.Column<int>(nullable: true),
                    ContraceptiveMethod = table.Column<int>(nullable: true),
                    Result = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contraceptions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contraceptions");
        }
    }
}
