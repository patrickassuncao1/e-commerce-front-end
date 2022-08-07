import { createContext, ReactNode, useEffect, useState } from "react";
import { ContextTypeAuth, user } from "../../@types";
import { firstUser, LoginRequest } from "../../services/api";
import { getUserTokenLocalStorage, setUserTokenLocalStorage } from "../../utils/storage";

type AuthProviderType = {
  children: ReactNode
}

type userType = {
  user: user
}

export const AuthContext = createContext<ContextTypeAuth>({} as ContextTypeAuth);

const AuthProvider = ({ children }: AuthProviderType) => {
  const [user, setUser] = useState<userType | null>();
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    const auth = async () => {
      const token = getUserTokenLocalStorage();
      if (token) {
        try {
          const response = await firstUser(token?.refreshToken?.userId);
          setUser({ user: response });
          // console.log(response);
        } catch (error) {
          // console.log(error);
        }
      }
      setOnLoading(false);
    }
    auth();
  }, [])

  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);
    const payLoad = { token: response?.token, refreshToken: response?.refreshToken };
    setUserTokenLocalStorage(payLoad);
    setUser({ user: response?.user } as userType);
  }

  const logout = async () => {
    setUser(null);
    setUserTokenLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, onLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
