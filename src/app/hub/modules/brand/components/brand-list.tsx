import { BrandModel } from "@/app/data/models/brand-model"

export const BrandList = () => {
  const brands: BrandModel[] = [
    { id: '', razao_social: 'Mana33', cnpj: '12345678901234', nome_fantasia: 'Mana33', email: 'any@gmail.com', location: { address: 'Rua 1', number: '123', complement: 'Apto 1', naiborhood: 'Centro', state: 'SP', city: 'São Paulo', zip_code: '12345678', coordenates: { latitude: '-23.5505', longitude: '-46.6333' } } },
    { id: '', razao_social: 'Mana33', cnpj: '12345678901234', nome_fantasia: 'Mana33', email: 'any@gmail.com', location: { address: 'Rua 1', number: '123', complement: 'Apto 1', naiborhood: 'Centro', state: 'SP', city: 'São Paulo', zip_code: '12345678', coordenates: { latitude: '-23.5505', longitude: '-46.6333' } } }
  ]
  return (
    <div>
      <div className="overflow-x-auto p-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 w-0"></th>
              <th className="px-4 py-2 text-left text-gray-700">Fantasia</th>
              <th className="px-4 py-2 text-left text-gray-700">Razão Social</th>
              <th className="px-4 py-2 text-left text-gray-700">CNPJ</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, key) => (
              <tr className='border-b border-gray-300' key={key}>
                <td className="px-4 py-2 flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="px-4 py-2 text-gray-700">{brand.nome_fantasia}</td>
                <td className="px-4 py-2 text-gray-700">{brand.razao_social}</td>
                <td className="px-4 py-2 text-gray-700">{brand.cnpj}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}