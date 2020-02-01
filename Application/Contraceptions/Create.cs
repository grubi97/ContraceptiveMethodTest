using System;
using System.Threading;
using System.Threading.Tasks;
using CallRequestResponseService;
using Domain;
using MediatR;
using Persistence;

namespace Application.Contraceptions
{
    public class Create
    {
        
        public class Command : IRequest
        {

            public Guid Id { get; set; }
            public DateTime Date { get; set; }
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
            public String Result{get; set;}

        }


        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var cont = new Contraception
                {
                    Id = request.Id,
                    Date = request.Date,
                    WifeAge = request.WifeAge,
                    WifeEducation = request.WifeEducation,
                    husbandEducation = request.husbandEducation,
                    Children = request.Children,
                    WifeReligion = request.WifeReligion,
                    WifeWork=request.WifeWork,
                    HusbandOccupation=request.HusbandOccupation,
                    LivingStandard=request.LivingStandard,
                    MediaExposure=request.MediaExposure,
                    ContraceptiveMethod=request.ContraceptiveMethod,
                    Result=""

                   
                    
                };
                _context.Contraceptions.Add(cont);//ne async metdoa jer ne korsitimo posebni value gen
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;//prazan objekt(vraća 200 ok)

                throw new Exception("Probblem saving changes");
            }

            
        }
    }
}