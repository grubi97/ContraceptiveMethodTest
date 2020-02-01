using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CallRequestResponseService;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Contraceptions
{
    public class List
    {

        public class Query : IRequest<List<Contraception>> { }

        public class Handler : IRequestHandler<Query, List<Contraception>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }


            public async Task<List<Contraception>> Handle(Query request, CancellationToken cancellationToken)
            {
                var cont = await _context.Contraceptions.ToListAsync();

                Clustering.ContList = cont.ToList();
                Clustering.InvokeRequestResponseService().Wait();
                
                
                return cont;

            }
        }



    }
}