// app/Http/Controllers/Admin/SectionController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index()
    {
        // Fetch all sections
        $sections = Section::all();
        return response()->json($sections);
    }

    public function show(Section $section)
    {
        // Fetch a single section
        return response()->json($section);
    }
}