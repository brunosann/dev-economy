<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExpenseRequest;
use App\Models\Expense;
use Illuminate\Http\Request;

class ExpenseController extends Controller
{
    public function store(StoreExpenseRequest $request)
    {
        $user = $request->user();

        $valueFormated = preg_replace('/\D/', '', $request->input('value'));
        $valueFormated = substr_replace($valueFormated, '.', -2, 0);

        $expenseData = [
            'value' => $valueFormated,
            'description' => $request->input('description'),
            'expenses_categories_id' => $request->input('category'),
            'user_id' => $user->id,
        ];

        Expense::create($expenseData);

        return redirect()->route('home');
    }
}
