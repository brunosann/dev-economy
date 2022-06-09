<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\ExpenseCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function __invoke(Request $request)
    {
        $userId = $request->user()->id;
        $expenseCategories = ExpenseCategory::all(['id', 'category']);
        $expenses = Expense::where('user_id', $userId)->whereMonth('created_at', date('n'))->get();
        return Inertia::render('Home', compact('expenseCategories', 'expenses'));
    }
}
