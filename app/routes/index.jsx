import { lazy, Suspense } from 'react'

const Discuzz = lazy(() => import('@discuzz/discuzz').then(mod => ({ 
  default: mod.default.Discuzz 
})))
const LocaleProviderEn = lazy(() => import('@discuzz/locale-en'))
const ComposerPlaintext = lazy(() => import('@discuzz/composer-plaintext'))
const ViewerPlaintext = lazy(() => import('@discuzz/viewer-plaintext'))

if (typeof document !== "undefined") {
  // fill missing values
  window.global = window
  window.process = {
    env: {
      NODE_ENV: 'production'
    }
  }
}

export default function Index() {
  return (
    <div>
      {typeof document !== "undefined" ? (
        <div key="discuzz">
          <Suspense fallback={<span>...</span>}>
            <Discuzz
              url={window.location.href}
              service={{
                apiKey: "AIzaSyDm837cbdbvkrAdYL9TAqUF3iML6UvZXk4",
                authDomain: "fire-talk-88.firebaseapp.com",
                projectId: "fire-talk-88",
                storageBucket: "fire-talk-88.appspot.com",
                messagingSenderId: "719566664522",
                appId: "1:719566664522:web:e1a9d26be22387e55b47b3"
              }}
              theme="light"
              auths={['google', 'apple', 'facebook', 'github', 'twitter', 'microsoft', 'yahoo']}
              config={{
                composer: ComposerPlaintext,
                viewer: ViewerPlaintext
              }}
              locale={LocaleProviderEn}
            />
          </Suspense>
        </div>
      ) : (
        <div key="discuzz" />
      )}
    </div>
  )
}
