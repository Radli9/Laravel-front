use App\Http\Controllers\Admin\SectionController;

// API Routes for sections
Route::get('sections', [SectionController::class, 'index']);
Route::get('sections/{section}', [SectionController::class, 'show']);