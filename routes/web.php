use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\SettingsController;

// Dashboard
Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

// User Management
Route::get('/admin/users', [UserController::class, 'index'])->name('admin.users.index');
Route::get('/admin/users/{user}/edit', [UserController::class, 'edit'])->name('admin.users.edit');
Route::put('/admin/users/{user}', [UserController::class, 'update'])->name('admin.users.update');
Route::delete('/admin/users/{user}', [UserController::class, 'destroy'])->name('admin.users.destroy');

// Settings
Route::get('/admin/settings', [SettingsController::class, 'edit'])->name('admin.settings.edit');
Route::put('/admin/settings', [SettingsController::class, 'update'])->name('admin.settings.update');

// Section Management
Route::apiResource('sections', SectionController::class);