using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context){

            if(!context.Contraceptions.Any()){
                var cont=new List<Contraception>{
                    new Contraception
                    {
                        WifeAge = 24,
                        Date = DateTime.Now.AddMonths(-2),
                        WifeEducation = 2,
                        husbandEducation = 3,
                        Children =3,
                        WifeReligion = 1,
                        WifeWork=1,
                        HusbandOccupation=2,
                        LivingStandard=3,
                        MediaExposure=0,
                        ContraceptiveMethod=1,
                        Result=""
                    },
                    new Contraception
                    {
                        WifeAge = 45,
                        Date = DateTime.Now.AddMonths(-2),
                        WifeEducation = 1,
                        husbandEducation = 3,
                        Children = 10,
                        WifeReligion = 1,
                        WifeWork=1,
                        HusbandOccupation=3,
                        LivingStandard=4,
                        MediaExposure=0,
                        ContraceptiveMethod=1,
                        Result=""
                    },
                    
                };
            context.Contraceptions.AddRange(cont);
            context.SaveChanges();
            }
        }
    }
}