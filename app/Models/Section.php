use App\Models\Section;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index()
    {
        return Section::all();
    }

    public function store(Request $request)
    {
        $section = Section::create($request->all());
        return response()->json($section, 201);
    }

    public function show($id)
    {
        return Section::find($id);
    }

    public function update(Request $request, $id)
    {
        $section = Section::findOrFail($id);
        $section->update($request->all());
        return response()->json($section, 200);
    }

    public function delete($id)
    {
        Section::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}