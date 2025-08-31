import { useState } from "react";

export function useValidation() {
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = (email: string, password: string, password2: string) => {
    const newErrors: typeof errors = {};

    // Email regex check
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email address";
    }

    // Password check
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must include at least one number";
    }
    else if (password !== password2) {
      newErrors.password = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
}
