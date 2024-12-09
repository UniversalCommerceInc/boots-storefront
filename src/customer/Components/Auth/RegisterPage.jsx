import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        receiveDeals: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.title) tempErrors.title = 'Please select a title.';
        if (!formData.firstName) tempErrors.firstName = 'First name is required.';
        if (!formData.lastName) tempErrors.lastName = 'Last name is required.';
        if (!formData.email) tempErrors.email = 'Email address is required.';
        if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid.';
        if (!formData.password) tempErrors.password = 'Password is required.';
        if (formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters.';
        if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = 'Passwords do not match.';
        if (!formData.agreeToTerms) tempErrors.agreeToTerms = 'You must agree to the terms.';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
            // Handle form submission
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center my-5">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 md:px-12">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-wwwbootscom-congress-blue mb-8">Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                            <label htmlFor="title" className="text-gray-700 font-medium w-1/3 md:w-1/4">Title*</label>
                            <select
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                className={`border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                            >
                                <option value="">Please Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                            </select>
                        </div>
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

                        <div className="flex items-center">
                            <label htmlFor="firstName" className="text-gray-700 font-medium w-1/3 md:w-1/4">First Name*</label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                                required
                            />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

                        <div className="flex items-center">
                            <label htmlFor="lastName" className="text-gray-700 font-medium w-1/3 md:w-1/4">Last Name*</label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                                required
                            />
                        </div>
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

                        <div className="flex items-center">
                            <label htmlFor="email" className="text-gray-700 font-medium w-1/3 md:w-1/4">Email Address*</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                                required
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <div className="flex items-center">
                            <label htmlFor="password" className="text-gray-700 font-medium w-1/3 md:w-1/4">Password*</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                                required
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                        <div className="flex items-center">
                            <label htmlFor="confirmPassword" className="text-gray-700 font-medium w-1/3 md:w-1/4">Confirm Password*</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 flex-grow`}
                                required
                            />
                        </div>
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <span>
                            <input
                                type="checkbox"
                                id="receiveDeals"
                                checked={formData.receiveDeals}
                                onChange={handleChange}
                                className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                            />
                            </span>
                            <span className="ml-2 text-gray-700">
                                Yes, I would like to receive exclusive deals, information on the latest products, and relevant offers.
                            </span>
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                className={`form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded ${errors.agreeToTerms ? 'border-red-500' : ''}`}
                                required
                            />
                            <span className="ml-2 text-gray-700">
                                I agree to the <a href="#" className="text-blue-600 hover:underline">terms & conditions*</a>
                            </span>
                        </label>
                        {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}
                    </div>

                    <button
                        type="submit"
                        className="bg-wwwbootscom-congress-blue text-white hover:bg-btn-hover transition duration-200 py-3 px-4 rounded-lg w-full"
                    >
                        Create My Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
