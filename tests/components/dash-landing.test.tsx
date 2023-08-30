import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DashboardLayout } from '../../src/components/layouts/dashboard-layout'

const queryClient = new QueryClient()

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>{' '}
  </QueryClientProvider>
)
describe('App', () => {
  it('renders headline', () => {
    render(<DashboardLayout title="Testing Layout">Dash</DashboardLayout>, {
      wrapper,
    })
    const title = screen.getByText(/Testing Layout/i)
    expect(title).toBeInTheDocument()
  })
})
