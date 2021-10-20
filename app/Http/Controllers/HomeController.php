<?php

namespace App\Http\Controllers;

use App\Models\ExpenseCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function __invoke(Request $request)
    {
        $expenseCategories = ExpenseCategory::all(['id', 'category']);
        return Inertia::render('Home', compact('expenseCategories'));
    }
}
