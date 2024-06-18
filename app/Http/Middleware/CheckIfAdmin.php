<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckIfAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Example logic: Check if the user is authenticated and is an admin
        if (!auth()->check() || !auth()->user()->isAdmin()) {
            abort(403, 'Unauthorized action.');
        }

        return $next($request);
    }
}