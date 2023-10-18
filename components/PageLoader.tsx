import React from 'react';

const PageLoader = ({ title }: { title: string }) => {
    return (
        <div className="fixed inset-0 z-50 flex h-screen w-full animate-page-load items-center justify-center bg-slate-50 text-primary">
            <h1 className="animate-page-load-image text-lg font-semibold">
                {title}
            </h1>
        </div>
    );
};

export default PageLoader;
