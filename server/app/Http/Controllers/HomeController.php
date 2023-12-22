<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function showPage()
    {
        $page = request()->page;

        if ($page) {
            if (view()->exists("pages/{$page}")) {
                return view("pages/{$page}");
            }
        }
        return view("pages/404");
    }
}