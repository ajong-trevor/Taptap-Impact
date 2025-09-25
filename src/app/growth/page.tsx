'use client';
import { BarChart, TrendingUp } from 'lucide-react';
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: 'January', users: 186 },
  { month: 'February', users: 305 },
  { month: 'March', users: 237 },
  { month: 'April', users: 273 },
  { month: 'May', users: 209 },
  { month: 'June', users: 289 },
];

const chartConfig = {
    users: {
      label: "New Users",
      color: "hsl(var(--primary))",
    },
};

export default function GrowthPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="space-y-4 text-center">
        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tapsend-fg">TapTapSend</span>
                <TrendingUp className="h-5 w-5" />
            </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">New User Growth Tracker</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
          Visualizing the expansion of the TapTapSend community through this initiative.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1">
            <CardHeader>
                <CardDescription>Total New Users</CardDescription>
                <CardTitle className="text-5xl">1,500+</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground">+289 in the last month</p>
            </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <BarChart className="h-6 w-6" />
                Monthly Sign-ups
            </CardTitle>
            <CardDescription>New TapTapSend users who joined via this platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                        <XAxis
                            dataKey="month"
                            stroke="hsl(var(--foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="hsl(var(--foreground))"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
