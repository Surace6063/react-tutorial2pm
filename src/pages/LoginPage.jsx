import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { registerFormValidationSchema } from "../utils/validate";

const LoginPage = () => {
  const {register,handleSubmit, formState:{errors, isSubmitting}} = useForm({
    resolver: yupResolver(registerFormValidationSchema)
  })

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-slate-50 shadow-2xl rounded-2xl p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Create Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First & Last Name side by side */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 text-slate-700 font-medium">First Name</label>
              <input
                {...register('first_name')}
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-slate-50"
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>}
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-slate-700 font-medium">Last Name</label>
              <input
              {...register('last_name')}
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-slate-50"
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-slate-700 font-medium">Email</label>
            <input
            {...register('email')}
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-slate-50"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-slate-700 font-medium">Password</label>
            <input
            {...register('password')}
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-slate-50"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-slate-700 font-medium">Confirm Password</label>
            <input{...register('conform_password')}
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent bg-slate-50"
            />
            {errors.conform_password && <p className="text-red-500 text-sm mt-1">{errors.conform_password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-5">
          Already have an account? <span className="text-slate-700 font-medium cursor-pointer hover:underline">Sign In</span>
        </p>
      </div>
    </div>
  )
}
export default LoginPage