namespace WebAPISample.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ThursMigration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Movies", "Imagename", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Movies", "Imagename");
        }
    }
}
