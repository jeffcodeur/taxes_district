import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="border-b border-solid border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <nav className="py-2" aria-label="Fil d'Ariane">
          <ol className="m-0 flex list-none flex-wrap items-center gap-x-1 gap-y-0.5 p-0 text-sm font-medium">
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;

              return (
                <Fragment key={idx}>
                  {item.href ? (
                    <li>
                      <Link href={item.href} className="text-[#C6C9CE] font-bold">
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li aria-current="page" className="font-bold">
                      {item.label}
                    </li>
                  )}

                  {!isLast && (
                    <li
                      aria-hidden="true"
                      className="mx-0.5 select-none text-[#C6C9CE] font-bold"
                    >
                      &gt;
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

