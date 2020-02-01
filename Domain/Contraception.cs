using System;

namespace Domain
{
    public class Contraception
    {

        public Guid Id{get; set;}
        public DateTime Date{get; set;}
        public Int32? WifeAge{get; set;}
        public Int32? WifeEducation{get; set;}
        public Int32? husbandEducation{get; set;}
        public Int32? Children{get; set;}
        public Int32? WifeReligion{get; set;}
        public Int32? WifeWork{get; set;}
        public Int32? HusbandOccupation{get; set;}
        public Int32? LivingStandard{get; set;}
        public Int32? MediaExposure{get; set;}
        public Int32? ContraceptiveMethod{get; set;}
        public string Result{get; set;}

        
    }
}
