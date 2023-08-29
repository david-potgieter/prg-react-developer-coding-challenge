import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DashboardLayout } from '../src/components/layouts/dashboard-layout'
describe('App', () => {
  it('renders headline', () => {
    render(<DashboardLayout title="Testing Layout">Dash</DashboardLayout>, {
      wrapper: BrowserRouter,
    })
    const title = screen.getByText(/Testing Layout/i)
    expect(title).toBeInTheDocument()
  })
})
