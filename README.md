# better-zustand-context
A better way of initializing a Zustand store with props from React.

# How it works
1. Make initial data for your Zustand store available through a React context.
2. Create 2 hooks for accessing your Zustand store. One for accessing the raw Zustand store, and another that is a React hook.
3. In this react hook, access the initial data from React context, and replace the state in the Zustand store with the initial data.

# Pros
- You can still access the raw Zustand store from non-React code.

# Cons
- Potential TypeError if you access Zustand through custom hook outside of the Provider.

# Tradition method
1. Create the Zustand store with the initial data, and store it in a React state.
2. Make the Zustand store available through a React context.
3. Access store through the React context.