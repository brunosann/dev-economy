<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $userData = $request->only('name', 'email');
        $userData['password'] = Hash::make($request->input('password'));
        User::create($userData);
        return redirect()->route('home');
    }
}
