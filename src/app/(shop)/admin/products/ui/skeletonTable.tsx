import React from 'react'

export const SkeletonTable = () => {
  return (
    <div className="mb-10">
      <table className="min-w-full">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            {["Imagen", "Titulo producto", "Precio", "Genero", "Stock", "Sizes"].map((title) => (
              <th
                key={title}
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b border-gray-300 animate-pulse">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <div className="w-20 h-20 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-40 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-20 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-24 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-10 bg-gray-300 rounded" />
              </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                <div className="h-4 w-28 bg-gray-300 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
