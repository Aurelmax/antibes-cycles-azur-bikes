import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const includeSpecs = url.searchParams.get('specs') === 'true'

    const products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true
          }
        },
        specifications: includeSpecs
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(products)
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}