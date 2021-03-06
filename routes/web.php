<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::inertia('/cadastro', 'Register')->name('register');
Route::post('/cadastro', [AuthController::class, 'register'])->name('register.submit');

Route::inertia('/login', 'Login')->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.submit');

Route::middleware('auth')->group(function () {
    Route::get('/', HomeController::class)->name('home');
    Route::resource('despesas', ExpenseController::class)->only(['store']);
    Route::get('/sair', [AuthController::class, 'logout'])->name('logout');
});
