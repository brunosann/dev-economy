<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExpenseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'value' => 'required',
            'category' => 'required|numeric'
        ];
    }

    public function messages()
    {
        return [
            'value.required' => 'Digite o valor',
            'category.required' => 'Selecione uma categoria',
            'category.numeric' => 'Categoria invalida'
        ];
    }
}
