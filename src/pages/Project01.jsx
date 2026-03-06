import React from 'react';
import { motion } from 'framer-motion';

function Project01() {
    return (
        <div className="w-full bg-white font-pretendard pt-24 text-[#121212]">
            {/* 1. Header Area (Blue Background) */}
            <section className="w-full bg-[#407AFF] text-white pt-24 md:pt-32 pb-64 relative flex flex-col items-center overflow-hidden">
                <motion.div
                    className="text-center px-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm md:text-base font-semibold tracking-wide mb-4 opacity-90">
                        스마트스코어 골프장 통합 B2B ERP 시스템
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                        골프장 통합 ERP시스템
                    </h1>
                </motion.div>

                {/* Placeholder for Hero Mockup (Desktop + Mobile) */}
                <div className="absolute -bottom-32 md:-bottom-48 w-full max-w-6xl mx-auto px-4 flex justify-center z-10">
                    <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl shadow-2xl flex items-center justify-center border-8 border-gray-800 text-gray-400 font-bold text-xl relative">
                        [메인 목업 이미지 삽입 위치 (assets/pr01_hero.png)]
                        {/* Mobile Mockup overlay placeholder */}
                        <div className="absolute -right-4 md:-right-12 -bottom-10 w-1/4 aspect-[9/19] bg-gray-100 rounded-[2rem] border-8 border-gray-800 shadow-xl flex justify-center items-center text-sm">
                            [모바일]
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer to account for overlapping absolute mockup */}
            <div className="w-full h-40 md:h-64 bg-[#f8f9fa]"></div>

            {/* 2. Overview / Points Section */}
            <section className="w-full bg-[#f8f9fa] py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block bg-[#407AFF] text-white text-xs font-bold px-3 py-1 mb-6 rounded">OVERVIEW</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">실무자의 시선으로 다시 쓰는 B2B 솔루션</h2>
                    <div className="flex justify-start">
                        <div className="w-full max-w-3xl space-y-4 text-gray-600 font-medium text-lg leading-relaxed">
                            <p>• 운영자 중심의 데이터를 한 눈에 파악할 수 있는 대시보드</p>
                            <p>• 파편화된 기전 관리자의 기능을 명확한 플로우로 재설계</p>
                            <p>• 높은 업무 효율을 위한 커스텀 UI 화면 및 모바일 환경 최적화</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. IA / Architecture (Dark) */}
            <section className="w-full bg-[#0D121B] text-white py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block border border-white/20 text-white text-xs font-bold px-3 py-1 mb-6 rounded">ARCHITECTURE</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">복잡한 B2B 시스템 구조의 직관화</h2>
                    <p className="text-gray-400 mb-16 text-lg">기존 복잡한 메뉴들을 실무 흐름에 맞게 그루핑하여 IA 설계 단계를 진행했습니다.</p>

                    <div className="w-full aspect-[21/9] bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 font-bold">
                        [IA 다이어그램 이미지 삽입 영역 (assets/pr01_ia.png)]
                    </div>
                </div>
            </section>

            {/* 4. Unified Screen (Light) */}
            <section className="w-full bg-white py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block bg-[#407AFF] text-white text-xs font-bold px-3 py-1 mb-6 rounded">UI DESIGN</div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">파편화된 기존 골프장 B2B 실무 화면을 하나로 통합</h2>
                    <p className="text-gray-600 mb-16 text-lg">기존 골프장에서 사용하고 있던 개별 시스템(예약, 경기관제, 정산 등)을 하나의 모듈로 합쳐<br />일관된 UI 시스템으로 재설계했습니다.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 text-gray-400 font-bold">[화면 목업 1]</div>
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 text-gray-400 font-bold">[화면 목업 2]</div>
                        <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 text-gray-400 font-bold">[화면 목업 3]</div>
                    </div>
                </div>
            </section>

            {/* 5. Key Features (Dark Blue) */}
            <section className="w-full bg-[#121A2F] text-white py-32 px-4">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    {/* Horizontal screens preview */}
                    <div className="w-full flex justify-center gap-4 mb-20 overflow-hidden">
                        <div className="w-1/3 aspect-video bg-white/10 rounded border border-white/20 flex items-center justify-center text-sm font-bold text-gray-500">[모듈 목업 1]</div>
                        <div className="w-1/3 aspect-video bg-white/10 rounded border border-white/20 flex items-center justify-center text-sm font-bold text-gray-500">[모듈 목업 2]</div>
                        <div className="w-1/3 aspect-video bg-white/10 rounded border border-white/20 flex items-center justify-center text-sm font-bold text-gray-500">[모듈 목업 3]</div>
                        <div className="w-1/3 aspect-video bg-white/10 rounded border border-white/20 flex items-center justify-center text-sm font-bold text-gray-500">[모듈 목업 4]</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl text-center">
                        <div>
                            <div className="w-12 h-6 bg-[#407AFF] text-white text-xs font-bold flex items-center justify-center rounded-sm mx-auto mb-6">STEP 1</div>
                            <h3 className="text-xl font-bold mb-4">직관적 정보 배열</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">업무 중요도에 맞춘 화면 배치로 빠른 의사결정과 대응이 가능하도록 핵심 데이터를 상하단으로 분리했습니다.</p>
                        </div>
                        <div>
                            <div className="w-12 h-6 bg-[#407AFF] text-white text-xs font-bold flex items-center justify-center rounded-sm mx-auto mb-6">STEP 2</div>
                            <h3 className="text-xl font-bold mb-4">다양한 옵션의 빠른 접근</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">수많은 제어 옵션들을 우측 플로팅 패널이나 사이드바로 구성하여 불필요한 페이지 이동을 방지했습니다.</p>
                        </div>
                        <div>
                            <div className="w-12 h-6 bg-[#407AFF] text-white text-xs font-bold flex items-center justify-center rounded-sm mx-auto mb-6">STEP 3</div>
                            <h3 className="text-xl font-bold mb-4">디자인 및 컴포넌트 표준화</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">시스템 볼륨이 큰 만큼 공통으로 사용할 수 있는 UI 컴포넌트와 규칙을 정립하여 개발 공수를 단축시켰습니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Custom Environment Monitor View */}
            <section className="w-full bg-[#f4f6fc] py-32 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-2/3">
                        <div className="w-full aspect-video bg-white rounded-lg border border-gray-300 shadow-xl flex items-center justify-center">
                            <span className="text-xl font-bold text-gray-400">[모니터 목업 삽입 영역]</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">효율성을 극대화한<br />커스텀 UI 화면</h2>
                        <p className="text-gray-600 leading-relaxed">
                            각 업무 환경에 맞는 모듈형 패널을 제공하여, 데스크 데스크탑이나 태블릿 등 어디서든 필요한 기능만 쉽게 꺼내 쓸 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. Typography & Colors */}
            <section className="w-full bg-white py-32 px-4 border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="inline-block bg-[#407AFF] text-white text-xs font-bold px-3 py-1 mb-12 rounded">DESIGN SYSTEM</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-lg font-bold text-gray-400 mb-2">TYPOGRAPHY</h3>
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Spoqa Han Sans Neo</h2>
                            <p className="text-gray-500 mb-8">가독성을 극대화한 폰트를 사용하여 복잡한 테이블의 가독성을 높였습니다.</p>
                            <div className="flex bg-gray-50 p-6 rounded-lg font-bold text-xl md:text-3xl tracking-tight items-end gap-4 overflow-hidden">
                                <span className="font-thin">Aa</span>
                                <span className="font-light">Aa</span>
                                <span className="font-normal">Aa</span>
                                <span className="font-medium">Aa</span>
                                <span className="font-bold">Aa</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-400 mb-2">COLOR SYSTEM</h3>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Blue Tone</h2>
                            <p className="text-gray-500 mb-8">신뢰감과 안정감을 주는 푸른 계열의 색상을 메인으로 구축</p>
                            {/* Color Swatches Grid */}
                            <div className="grid grid-cols-5 gap-2 md:gap-4">
                                {/* Blue scale */}
                                <div className="aspect-square bg-[#1A3A8F] rounded flex p-2 text-white/50 text-xs items-end">900</div>
                                <div className="aspect-square bg-[#224BC1] rounded flex p-2 text-white/50 text-xs items-end">800</div>
                                <div className="aspect-square bg-[#2D62F3] rounded flex p-2 text-white/50 text-xs items-end">700</div>
                                <div className="aspect-square bg-[#407AFF] rounded flex p-2 text-white/80 text-xs items-end">Main</div>
                                <div className="aspect-square bg-[#7BA6FF] rounded flex p-2 text-white/80 text-xs items-end">400</div>

                                {/* Gray scale */}
                                <div className="aspect-square bg-[#121212] rounded flex p-2 text-white/50 text-xs items-end">900</div>
                                <div className="aspect-square bg-[#2b2b2b] rounded flex p-2 text-white/50 text-xs items-end">800</div>
                                <div className="aspect-square bg-[#4a4a4a] rounded flex p-2 text-white/50 text-xs items-end">700</div>
                                <div className="aspect-square bg-[#A1A1A1] rounded flex p-2 text-white/80 text-xs items-end">400</div>
                                <div className="aspect-square bg-[#E5E5E5] rounded flex p-2 text-gray-400 text-xs items-end border">100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Mobile Showcase */}
            <section className="w-full bg-[#407AFF] text-white py-32 px-4 overflow-hidden flex flex-col items-center relative">
                <div className="text-center z-10 mb-20">
                    <div className="inline-block bg-white text-[#407AFF] text-xs font-bold px-3 py-1 mb-6 rounded">MOBILE APP</div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">실시간 관제를<br />내 손에서 완벽하게 제어</h2>
                    <p className="text-white/80">담당자들은 자리에 앉아있지 않아도 현장을 통제할 수 있습니다.</p>
                </div>

                {/* Cascading Mobile Screens */}
                <div className="w-full max-w-7xl mx-auto flex justify-center gap-6 z-10">
                    <div className="w-1/4 max-w-[280px] aspect-[9/19] bg-white rounded-3xl border-8 border-gray-100 shadow-2xl translate-y-24 flex items-center justify-center text-gray-400 text-sm font-bold">[서브]</div>
                    <div className="w-1/3 max-w-[320px] aspect-[9/19] bg-white rounded-3xl border-8 border-gray-100 shadow-2xl flex items-center justify-center text-[#407AFF] text-lg font-bold">[메인 모바일 뷰]</div>
                    <div className="w-1/4 max-w-[280px] aspect-[9/19] bg-white rounded-3xl border-8 border-gray-100 shadow-2xl translate-y-12 flex items-center justify-center text-gray-400 text-sm font-bold">[서브]</div>
                </div>
            </section>
        </div>
    );
}

export default Project01;
