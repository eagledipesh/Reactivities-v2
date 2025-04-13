using System;
using Domain;
using MediatR;
using Persistence;
using SQLitePCL;

namespace Application.Acitivities.Command;

public class DeleteActivity
{
    public class Command : IRequest
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var Activity = await context.Activities
            .FindAsync([request.Id],cancellationToken) 
                ?? throw new Exception("Activity not found");
            
            context.Remove(Activity);
            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
