import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { DashWidget } from '../../src/components/ui/widget/dash-widget'
describe('DashWidget', () => {
  it('renders correctly', () => {
    const item = {
      name: 'Dashboard',
      icon: () => <svg />,
      path: '/dashboard',
      showChange: true,
      stat: '200',
      change: '10',
      changeType: 'increase',
    }

    render(<DashWidget item={item} />, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByText(item.name)).toBeInTheDocument()
    expect(screen.getByText(item.stat)).toBeInTheDocument()
    expect(screen.getByText('View all')).toHaveAttribute('href', item.path)
  })
})
