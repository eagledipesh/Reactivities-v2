using System;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetActivityDetail(String id)
    {
        var activity = await context.Activities.FindAsync(id);
        if (activity == null) return NotFound();
        return Ok(activity);
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity)
    {
        context.Activities.Add(activity);
        await context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetActivityDetail), new { id = activity.Id }, activity);
    }
}
