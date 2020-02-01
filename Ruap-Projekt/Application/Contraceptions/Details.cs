using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using CallRequestResponseService;
using Domain;
using MediatR;
using Persistence;

namespace Application.Contraceptions
{
    public class Details
    {
        public class Query : IRequest<Contraception> { 

             public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Contraception>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }


          

            public async Task<Contraception> Handle(Query request, CancellationToken cancellationToken)
            {
               var cont = await _context.Contraceptions.FindAsync(request.Id);
            
                
                
                
                return cont;
            }
        }
    }
}