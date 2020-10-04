import { Item } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/item/item"
import { FactorItem } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/factor-item/factor-item"
import { Title } from "@perfolio/components/nav/sidebar/tiered-sidebar/menu/title/title"

export const menuContent = (): {
  title: React.ReactNode
  items: React.ReactNode[]
  
}[] => {

  return [
    {
      title: <Title label="Builder" />,
      items: [
        <Item
          label="API"
          href="/notImplemented"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 code">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          }
        />,
        <Item
          label="File Download"
          href="/notImplemented"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 cloud-download">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          }
        />,
        <Item
          label="Charts"
          href="/notImplemented"
          icon={
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 chart-square-bar">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
          tag="coming soon"
        />,
      ],
    },
    {
      title: <Title label="Factor Models" />,
      items: [
        <FactorItem label="Three" href="/factor/3" factors={["Mkt-RF", "SMB", "HML"]} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>} />,
        <FactorItem label="Four" href="/factor/4" factors={["Mkt-RF", "SMB", "HML", "MOM"]} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>} />,
        <FactorItem label="Five" href="/factor/5" factors={["Mkt-RF", "SMB", "HML", "RMW", "CMA"]} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>} />,
        <FactorItem label="Six" href="/factor/6" factors={["Mkt-RF", "SMB", "HML", "RMW", "CMA", "MOM"]} icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>} />,
      ]
    }

  ]
}