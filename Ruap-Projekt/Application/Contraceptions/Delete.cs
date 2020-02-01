using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Contraceptions
{
    public class Delete
    {
         public class Command : IRequest
        {
            public Guid Id{get;set;}

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
                //handler logic

                var cont=await _context.Contraceptions.FindAsync(request.Id);
                if(cont==null){
                    throw new Exception("No activity");
                }

                _context.Remove(cont);


                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;//prazan objekt(vraća 200 ok)

                throw new Exception("Probblem saving changes");
            }

           
        }
    }
}