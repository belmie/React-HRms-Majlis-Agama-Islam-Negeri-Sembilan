import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  HelpCircle,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  LaptopMinimal,
  Activity,
  SquareUserRound,
  Warehouse,
  LetterText,
} from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Pentadbir Sistem',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Pentadbiran',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Sumber Manusia',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Kakitangan',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Halaman Utama',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Info Semasa',
          url: '#',
          icon: LaptopMinimal,
        },
        {
          title: 'Log Aktiviti Staf',
          url: '#',
          icon: Activity,
        },
        {
          title: 'Cuti',
          url: '#',
          icon: LaptopMinimal,
        },
        {
          title: 'Rekod Sumber Manusia',
          url: '#',
          icon: SquareUserRound,
        },
        {
          title: 'Rekod Pentadbiran',
          url: '#',
          icon: SquareUserRound,
        },
        {
          title: 'Rekod Kewangan',
          url: '#',
          icon: SquareUserRound,
        },
        {
          title: 'Tempahan Bilik Mesyuarat',
          url: '#',
          icon: Warehouse,
        },
        {
          title: 'Penggurusan Prestasi',
          url: '#',
          icon: SquareUserRound,
        },
        {
          title: 'Penggurusan Isytihar Harta',
          url: '#',
          icon: SquareUserRound,
        },
        {
          title: 'Surat Jaminan',
          url: '#',
          icon: LetterText,
        },
        {
          title: 'Tugas',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Aplikasi',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'Perbualan',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'Pengguna',
          url: '/users',
          icon: Users,
        },
        {
          title: 'Secured by Clerk',
          icon: ClerkLogo,
          items: [
            {
              title: 'Log Masuk',
              url: '/clerk/sign-in',
            },
            {
              title: 'Daftar',
              url: '/clerk/sign-up',
            },
            {
              title: 'Pengurusan Pengguna',
              url: '/clerk/user-management',
            },
          ],
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: ShieldCheck,
          items: [
            {
              title: 'Sign In',
              url: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              url: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              url: '/sign-up',
            },
            {
              title: 'Forgot Password',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: Bug,
          items: [
            {
              title: 'Unauthorized',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'Forbidden',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'Not Found',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'Internal Server Error',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'Maintenance Error',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Tetapan',
          icon: Settings,
          items: [
            {
              title: 'Profil',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Akaun',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Tema & Penampilan',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Notifikasi',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Paparan',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
        {
          title: 'Help Center',
          url: '/help-center',
          icon: HelpCircle,
        },
      ],
    },
  ],
}
