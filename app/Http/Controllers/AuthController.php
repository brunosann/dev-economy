<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
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

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $verifCredentials = Auth::attempt($credentials);
        if (!$verifCredentials) return back()->withErrors(['message' => 'Email e/ou senha incorretos!']);
        return redirect()->route('home');
    }

    public function logout()
    {
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
        return redirect()->route('login');
    }
}
