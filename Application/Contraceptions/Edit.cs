using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Contraceptions
{
    public class Edit
    { public class Command : IRequest
        {
            public Guid Id { get; set; }
            public DateTime? Date { get; set; }
            public Int32? WifeAge { get; set; }
            public Int32? WifeEducation { get; set; }
            public Int32? husbandEducation { get; set; }
            public Int32? Children { get; set; }
            public Int32? WifeReligion { get; set; }
            public Int32? WifeWork { get; set; }
            public Int32? HusbandOccupation { get; set; }
            public Int32? LivingStandard { get; set; }
            public Int32? MediaExposure { get; set; }
            public Int32? ContraceptiveMethod { get; set; }


        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                //handler logic
                    var cont=await _context.Contraceptions.FindAsync(request.Id);
                    if(cont==null){
                        throw new Exception("No activity");

                    }

                    cont.Children=request.Children ?? cont.Children;
                    cont.WifeAge=request.WifeAge ?? cont.WifeAge;
                    cont.WifeEducation=request.WifeEducation ?? cont.WifeEducation;
                    cont.WifeReligion=request.WifeReligion ?? cont.WifeReligion;
                    cont.Date=request.Date ?? cont.Date;
                    cont.WifeWork=request.WifeWork ?? cont.WifeWork;
                    cont.ContraceptiveMethod=request.ContraceptiveMethod ?? cont.ContraceptiveMethod; 
                    cont.husbandEducation=request.husbandEducation ?? cont.husbandEducation;
                    cont.HusbandOccupation=request.HusbandOccupation ?? cont.HusbandOccupation;
                    cont.LivingStandard=request.LivingStandard ?? cont.LivingStandard;
                    cont.MediaExposure=request.MediaExposure ?? cont.MediaExposure;


                    




                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;//prazan objekt(vraća 200 ok)

                throw new Exception("Probblem saving changes");
            }

           
        }
        
    }
}